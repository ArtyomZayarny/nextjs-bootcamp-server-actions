"use client";
import { useFormState, useFormStatus } from "react-dom";
import { addEntry } from "./_actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="rounded-lg bg-black py-2 text-white disabled:cursor-not-allowed">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export const Form = () => {
  const [state, formAction] = useFormState(addEntry, null);
  return (
    <section className="flex gap-6">
      <form action={formAction} className="flex flex-1 flex-col gap-4 sm:w-1/2">
        <input name="name" placeholder="name" className="rounded-lg p-2" />
        <input
          name="message"
          placeholder="message"
          className="rounded-lg p-2"
        />
        <SubmitButton />
      </form>
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
        {<pre> {JSON.stringify(state, null, 2)}</pre>}
      </div>
    </section>
  );
};
