import { useState } from "react";
import { Tab } from "./assets/samples/tabs/Tab";
import { Modal } from "./assets/samples/modals/Modal";
import { Carousel } from "./assets/samples/carousels/Carousel";
import { UnControlledForm } from "./assets/samples/forms/Form_useRef";
import { Form } from "./assets/samples/forms/Form_useState";

function App() {
  return (
    <>
      {/* <Tab />
      <Modal /> */}
      {/* <Carousel /> */}
      {/* <Form /> */}
      <UnControlledForm />
    </>
  );
}

export default App;
