//TODO: this is the page that makes the call
// should have a loader that calls the jira loader
// form goes here

import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { CreateTicket, GetMetaData } from "./jira";

// REPLACE contents of Index() with:
//LOADER
// https://remix.run/docs/en/v1/api/conventions#loader
// - have the loader contact the loader in /jira

// BUTTON

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      return await CreateTicket();
    }
  }
};

export default function Index() {
  return (
    <Form method="post">
      <button type="submit">Create Jira Ticket</button>
    </Form>
  );
}
