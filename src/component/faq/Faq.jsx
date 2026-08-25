import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="text-center space-y-5">
        <h2 className="text-[40px] text-secondary font-extrabold">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="mb-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. <br /> Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="w-[1000px] mx-auto mb-5">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-secondary font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-secondary font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-secondary font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
