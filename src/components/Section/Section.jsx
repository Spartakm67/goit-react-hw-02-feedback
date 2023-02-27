import  { SectionStyle }  from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
 };