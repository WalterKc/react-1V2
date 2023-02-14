/*
 * Este componente debe renderizar un checkbox (<input type="checkbox" />) que se seleccione o des-seleccione al hacer click.
 * Debe tener su propio estado (una variable de tipo booleano que indique si el componente está seleccionado o no)
 * Recibirá dos props: name e initialValue.
 * name indica el nombre del checkbox, será un string que debe ser renderizado a su lado.
 * initialValue es un booleano que indica el valor inicial del checkbox.
 * onChange es una función que se debe disparar cuando el checkbox se selecciona (o des-selecciona), y debe tener como parámetro el valor nuevo del checkbox.
 *
 * DATO: la prop que define si un <input type="checkbox" /> está seleccionado es "checked"
 */

export function UncontrolledCheckbox({ name, initialValue }) {
  //acordate ,que entre los paretensis de intialValue, podes poner un estado inicial
  let [estado, setValue] = React.useState(initialValue);

  const evento = function (e) {
    console.log(estado);
    setValue(e.target.checked);
  };

  return (
    <div>
      <span>{name}</span>
      <input
        id="check"
        type="checkbox"
        //checked={initialValue}
        onChange={evento}
      />
    </div>
  );
}

/*
 * Este componente debe renderizar una lista de componentes UncontrolledCheckbox.
 * Debes completar ese componente antes de completar este.
 * Recibirá una prop: items.
 * items es un objeto de forma { [nombre]: [valorInicial] }, que liste todos los checkboxes por ejemplo:
 * <ControlledCheckboxList items={
 *   uno: false,
 *   dos: true,
 *   tres: false,
 * } />
 * debe renderizar tres checkboxes, con nombres "uno", "dos" y "tres", que inicien con valores false, true y false respectivamente.
 */

//esta shit es medio rara, pero ayuda mucho  a simplificar esto, basicamente funciona asi
/**
 * tenes un array de objetos asi
 * [uno:"a"
 * dos:"b"
 * tres:"c"]
 * cuando se usa Object.entries(objeto), devuelve los objetos asi como aparecen 1 por 1
 * es como un bucle for simplificado
 * igual , no me gusta, tengo que hacerlo de otra manera, presiento que si no entiendo esta shit
 * me va a ir mal mas adelante, voy a expandirlo despues de terminar la tarea 4
 */
export function CheckboxList({ items }) {
  return Object.entries(items).map(([key, value]) => (
    <UncontrolledCheckbox name={key} initialValue={value} key={key} />
  ));
}
