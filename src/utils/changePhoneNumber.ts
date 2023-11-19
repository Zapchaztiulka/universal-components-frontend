export const changePhoneNumber = (phoneNumber: string | undefined): string => {

if (!phoneNumber) return '';

  let formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); 

  if (formattedPhoneNumber.length > 2) {
    formattedPhoneNumber = formattedPhoneNumber.replace(/^(\d{3})(\d+)/, '$1-$2'); 
  }

  if (formattedPhoneNumber.length > 6) {
    formattedPhoneNumber = formattedPhoneNumber.replace(/-(\d{3})(\d+)/, '-$1-$2'); 
  }

  if (formattedPhoneNumber.length > 9) {
    formattedPhoneNumber = formattedPhoneNumber.replace(/-(\d{2})(\d+)$/, '-$1-$2'); 
  }

  return formattedPhoneNumber;} 

