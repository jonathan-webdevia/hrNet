## Usage/Examples

```javascript
import Modal from "ReturnModal";

function App() {
  /* define the initial state & update the modal display */
  const [modalBool, setModalBool] = useState(false);

  /* Update the state of display */
  const showModal = () => {
    setModalBool(!modalBool);
  };

  return (
    /*
     * defaultState => initial display *
     * type => define the style of modal msg
     * txt => your text to be displayed
     * showModal => the func that updates the display
     *
     */

    <Modal
      defaultState=":boolean"
      type={"success"}
      txt={"your msg"}
      stateUPDT={showModal}
    />
  );
}
```
