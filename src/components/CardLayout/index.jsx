import { useState } from 'react';
import { useId } from 'react';
import PropTypes from 'prop-types';
import useCard from '@/hooks/useCard';
import FieldContainer from '@components/FieldContainer';

const CardLayout = ({ calc }) => {
  const id = useId();
  const [result, setResult] = useState(0);
  const { form, onCalc } = useCard();

  const handleCalculation = (e) => {
    let result = Math.round(calc.function({ ...form }));
    setResult(Object.keys(form).length === 0 ? 0 : result);
    e.preventDefault();
  };

  const clearResult = () => {
    setResult(0);
  };

  return (
    <form
      className="flex flex-col border rounded-lg w-80 h-72 justify-center items-center"
      onSubmit={handleCalculation}
    >
      <section className="text-center pt-2">
        <h2 className="text-xl font-bold mb-2 text-justify w-auto px-4 text-gray-800">
          {calc.title}
        </h2>
        <article className="w-full text-left px-4">
          <legend className="text-sm text-gray-400 w-full text-justify mb-2">
            {calc.description}
          </legend>
          <section className="flex flex-col justify-center mb-3 w-full h-20">
            {calc.fields.map((field, index) => (
              <FieldContainer
                key={id + index}
                label={field.label}
                name={field.name}
                event={onCalc}
              />
            ))}
          </section>
          <section className="mb-3">
            <div>
              <label className="pr-2 text-gray-800 font-bold">Resultado:</label>
              <input className="" type="text" disabled value={result} />
            </div>
          </section>
          <section className="flex flex-row justify-between w-full items-center mb-4">
            <button
              type="button"
              className="w-20 font-thin text-md text-center text-white bg-slate-500 hover:bg-slate-900 transition ease-in active:scale-90 h-auto rounded-md pb-1"
              onClick={handleCalculation}
            >
              Calcular!
            </button>
            <button
              type="button"
              className="w-40 font-thin text-md text-center text-white bg-red-600/50 hover:bg-red-600 transition ease-in active:scale-90 h-auto rounded-md pb-1"
              onClick={clearResult}
            >
              Limpiar resultado
            </button>
          </section>
        </article>
      </section>
    </form>
  );
};

CardLayout.propTypes = {
  calc: PropTypes.object.isRequired,
};

export default CardLayout;
