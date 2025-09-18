import type { Route } from "./+types/index";
import { Form } from "react-router";
import Input from "~/components/Input";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as { [key: string]: string };

  const errors: Record<string, string> = {};

  if (!data.name) errors.name = "Name is required";
  if (!data.email) {
    errors.email = "Email is requried";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }
  if (!data.subject) errors.subject = "Subject is required";
  if (!data.message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return { submitMessage: "Form submitted successfully", ...data };
}

export default function ContactPage({ actionData }: Route.ComponentProps) {
  const { errors } = actionData || {};
  console.log(actionData);

  return (
    <div className="mx-auto max-w-xl rounded-lg bg-gray-900 px-6 py-12 shadow-lg">
      <h2 className="mb-8 text-2xl font-medium">Contact Me</h2>

      {actionData?.submitMessage ? (
        <div className="mb-6 rounded-lg bg-green-600 px-4 py-2 text-center shadow-lg">
          <p className="text-sm text-green-100">{actionData.submitMessage}</p>
        </div>
      ) : null}

      <Form className="space-y-6" method="POST">
        <Input name="name" label="Full Name" type="text" error={errors?.name} />
        <Input name="email" label="Email" type="email" error={errors?.email} />
        <Input
          name="subject"
          label="Subject"
          type="text"
          error={errors?.subject}
        />

        <Input
          name="message"
          label="Message"
          type="textarea"
          error={errors?.message}
        />

        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center text-gray-200 transition-colors duration-200 hover:bg-blue-700 focus:outline-none"
        >
          Send Message
        </button>
      </Form>
    </div>
  );
}
