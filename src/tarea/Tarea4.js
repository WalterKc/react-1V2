/*
 * Este componente debe renderizar un checkbox (<input type="checkbox" />).
 * Recibirá tres props: name, value y onChange.
 * name indica el nombre del checkbox, será un string que debe ser renderizado a su lado.
 * value es un booleano que indica el valor del checkbox (true o false según esté o no seleccionado).
 * onChange es una función que se debe disparar cuando el checkbox se selecciona.
 */

export function ControlledCheckbox({ name, value, onChange }) {
  //let [estado, setValue] = React.useState(value);
  /*  
  const evento = function (e) {
    console.log(estado);
    setValue(e.target.checked);
  };
  */

  return (
    <div>
      <label>{name}</label>
      <input id={name} type="checkbox" checked={value} onChange={onChange} />
    </div>
  );
}

/*
 * Este componente debe renderizar una lista de componentes ControlledCheckbox.
 * Debes completar ese componente antes de completar este.
 * Recibirá una prop: items.
 * items es un objeto de forma { [nombre]: [valorInicial] }, que liste todos los checkboxes por ejemplo:
 * <ControlledCheckboxList items={
 *   uno: false,
 *   dos: true,
 *   tres: false,
 * } />
 * debe renderizar tres checkboxes, con nombres "uno", "dos" y "tres", que inicien con valores false, true y false respectivamente.
 * Este componente tendrá un solo estado, que tendrá la misma forma que la prop items.
 * La única diferencia es que el estado debe CAMBIAR según se vayan clickeando los checkboxes.
 * Por ejemplo, si hacemos click en "uno", el estado deberá ser:
 * {
 *   uno: true,
 *   dos: true,
 *   tres: false,
 * }
 */

export function CheckboxListWithState({ items }) {
  //const [estado, setEstado] = React.useState(items);
  let [estado, setValue] = React.useState(Object.values(items));

  const evento = function (e) {
    console.log(estado);
    setValue(Object.values(items));
    // nose
  };

  //console.log(estado);
  //if (e.target.id === "uno") {
  //  console.log("es UNO");
  //setEstado(estado.uno.value);
  //}

  //console.log(e.target.id);
  //console.log(Object.entries(estado));
  //console.log(Object.keys(estado)[1]);

  //console.log({ ...estado, [key]: value });
  /*
    for (let x of Object.keys(estado)) {
      console.log(x);
    }
    */
  //setEstado();
  //setEstado(estado[0]);

  return Object.entries(items).map(([key, value]) => (
    <ControlledCheckbox name={key} value={value} onChange={evento} key={key} />
  ));
}

/*
 * Para este punto, seguramente hayan notado las palabras "Controlled" y
 * "Uncontrolled" en los componentes que hicieron previamente. Estos términos
 * indican si el componente puede cambiar su valor mediante props.
 *
 * Por ejemplo, pueden notar que en la tarea anterior si en algún momento quisieran
 * cambiar el valor de UncontrolledCheckbox desde CheckboxList no podrán hacerlo,
 * porque este componente no tiene una propiedad "value", solamente "initialValue".
 * Es decir, una vez que le dan el valor inicial, el componente mismo se
 * encarga de su estado.
 *
 * En cambio, si quisieran cambiar el valor de ControlledCheckbox desde
 * CheckboxListWithState, pueden hacerlo sin problema. Por ejemplo, pueden
 * probar poner el valor "true" para todos los ControlledCheckboxes que la lista
 * renderiza, y verán que se mantendrán siempre checkeados.
 *
 * No es necesario que hagan nada con esta información, veremos para qué sirve
 * en la próxima clase.
 */
