import { Form } from "react-router-dom";

export default function Search() {
    return (
        <Form>
          <Form.Control
            type="search"
            placeholder="Search"
            className="ms-2 search-size"
            aria-label="search"
          />
        </Form>
      );
}