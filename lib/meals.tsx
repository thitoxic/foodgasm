import sql from 'better-sqlite3';

const db: any = sql('meals.db');

export const getMeals =async()=>{
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 2000);
    })
    return db.prepare('SELECT * FROM meals').all();
}