import AuthSection from "@/components/auth/auth-section";
import SignUpForm from "@/components/forms/sign-up";

function SignUp() {
  return (
    <AuthSection title="Create your account">
      <SignUpForm />
    </AuthSection>
  );
}

export default SignUp;
