'use server'

export const shareMealtoServer = async (values : {
    name: string;
    email: string;
    recipeTitle: string;
    summary: string;
    instructions: string;
    image: File | null;
  }) => {
    console.log('values', values)
  }