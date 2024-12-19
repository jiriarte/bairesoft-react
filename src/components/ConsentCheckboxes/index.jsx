import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CheckboxContainer = styled.div`
  margin: 1rem 0;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const StyledCheckbox = styled.input`
  margin-right: 0.5rem;
  margin-top: 0.25rem;
`;

const Label = styled.label`
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.4;
  user-select: none;
`;

const StyledLink = styled(Link)`
  color: #3182ce;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.span`
  color: #e53e3e;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`;

const ConsentCheckboxes = ({ onConsentChange, showError }) => {
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handlePrivacyConsentChange = (e) => {
    setPrivacyConsent(e.target.checked);
    onConsentChange({
      privacy: e.target.checked,
      marketing: marketingConsent
    });
  };

  const handleMarketingConsentChange = (e) => {
    setMarketingConsent(e.target.checked);
    onConsentChange({
      privacy: privacyConsent,
      marketing: e.target.checked
    });
  };

  return (
    <CheckboxContainer>
      <CheckboxWrapper>
        <StyledCheckbox
          type="checkbox"
          id="privacyConsent"
          checked={privacyConsent}
          onChange={handlePrivacyConsentChange}
        />
        <Label htmlFor="privacyConsent">
          Consiento el uso de mis datos para los fines indicados en la{' '}
          <StyledLink to="/politica-privacidad">política de privacidad</StyledLink>
        </Label>
      </CheckboxWrapper>
      {showError && !privacyConsent && (
        <ErrorText>Debes aceptar la política de privacidad para continuar</ErrorText>
      )}

      <CheckboxWrapper>
        <StyledCheckbox
          type="checkbox"
          id="marketingConsent"
          checked={marketingConsent}
          onChange={handleMarketingConsentChange}
        />
        <Label htmlFor="marketingConsent">
          Consiento el uso de mis datos personales para recibir publicidad de su entidad
        </Label>
      </CheckboxWrapper>
    </CheckboxContainer>
  );
};

export default ConsentCheckboxes;
