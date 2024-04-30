"use client";

import { useFormStore } from "@/store/form";
import Form from "./Form";
import FormField from "@/components/pages/FormField";
import Loading from "@/components/shared/Loading";

export default function FormContainer() {
  const status = useFormStore().status;
  const form = useFormStore((state) => state.form);

  return (
    <section>
      {status === "input" && <Form />}
      {/* {status === "loading" && <Loading />} */}
    </section>
  );
}
