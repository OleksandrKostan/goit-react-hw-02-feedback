import propTypes from 'prop-types';
import { Button, Conteiner } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => 

       ( <Conteiner>
            {options.map((option, index) => (
                <Button key={index}
                    onClick={() => { onLeaveFeedback(option) }}>{option}</Button>
            ))}
        </Conteiner>);
    
 
FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
 };