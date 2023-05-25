/* eslint-disable react-refresh/only-export-components */
import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

const ContactItem = () => {
  const { contact } = useLoaderData();
  console.log(contact, "contactItem");

  return (
    <div>
      ContactItem
      <Suspense fallback={<small>Loading Comments...</small>}>
        <Await resolve={contact}>
          <div>{contact.firstName}</div>
        </Await>
      </Suspense>
    </div>
  );
};

export default ContactItem;
