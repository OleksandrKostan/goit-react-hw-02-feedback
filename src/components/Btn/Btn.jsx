import propTypes from 'prop-types';

export const Btn = ({ options, onLeaveFeedback }) => 

       ( <div>
            {options.map((option, index) => (
                <button key={index}
                    onClick={() => { onLeaveFeedback(option) }}>{option}</button>
            ))}
        </div>);
    
 
Btn.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
 };