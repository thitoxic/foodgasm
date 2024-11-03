import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';
const s3 = new S3({
    region: 'ap-south-1'
  });
const db: any = sql('meals.db');

export const getMeals =async()=>{
    return db.prepare('SELECT * FROM meals').all();
}

export const getSingleMeal = (mealId: string) => {
    return db.prepare('SELECT * FROM meals WHERE mealId=?').get(mealId);
}

export const saveMeal = async(mealData: any) => {
    mealData.mealId = slugify(mealData.title, { lower: true });
    mealData.instructions = xss(mealData.instructions);
    const bufferedImage = await mealData.image.arrayBuffer();
    const extension = mealData.image.name.split('.').pop();
    const fileName = `${mealData.mealId}.${extension}`;
    s3.putObject({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `images/${fileName}`,
        Body: Buffer.from(bufferedImage),
        ContentType: mealData.image.type,
      });
    mealData.image = fileName;
    db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, mealId) 
                VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @mealId)`).run(mealData);
}