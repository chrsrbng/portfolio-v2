export const EmailTemplate = ({
  message,
  email,
}: {
  message: string;
  email: string;
}) => {
  return (
    <>
      <div>From: {email}</div>
      <div>{message}</div>
    </>
  );
};
