"use server";

import { FormDataSchema } from "@/lib/schema";

export async function addEntry(state: any, formData: FormData) {
  const result = FormDataSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
  });
  //Delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (result.success) {
    return { data: result.data };
  }

  //TODO: preform any action/mutation

  if (result.error) {
    return { error: result.error.format() };
  }
}
