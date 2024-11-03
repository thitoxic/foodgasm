'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { formDataToObject } from "@/constants/constants";

export const shareMealtoServer = async (values : any) => {
    const payload = formDataToObject(values);
    await saveMeal(payload);
    redirect('/meals')
  }