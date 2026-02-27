export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/*  Booking form validation */

export const MAX_NOTES_LENGTH = 500;
export const MAX_NAME_LENGTH = 100;

export const validateName = (name: string) => {
  const trimmed = name.trim();

  if (!trimmed) return false;
  if (trimmed.length < 2) return false;
  if (trimmed.length > MAX_NAME_LENGTH) return false;

  return true;
};

export const validateNotes = (notes: string) => {
  return notes.length <= MAX_NOTES_LENGTH;
};

export const validateBookingForm = (data: {
  name: string;
  email: string;
  notes: string;
}) => {
  return (
    validateName(data.name) &&
    isValidEmail(data.email) &&
    validateNotes(data.notes)
  );
};
