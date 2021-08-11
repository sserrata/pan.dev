import Layout from "@theme/Layout";
import classnames from "classnames";
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styles from "./styles.module.css";

function SignInScreen(props) {
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: ["google.com"],
  };

  return (
    <Layout title="Signin" wrapperClassName="homepage">
      <div className={styles.wrapper}>
        <div className={classnames("card shadow--lw", styles.loginCard)}>
          <div className="card__header">
            <div className="avatar avatar--vertical">
              <img
                className="avatar__photo avatar__photo--xl"
                src="/img/PANW_Parent_Logo_Black.svg"
              />
            </div>
          </div>
          <div className="card__body">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={
                props.instance ? props.instance.auth() : props.instance
              }
            />
          </div>
          <div className="card__footer">
            <p className={classnames("text text--secondary", styles.tos)}>
              By continuing, you are indicating that you accept our{" "}
              <a
                target="_blank"
                href="https://www.paloaltonetworks.com/legal-notices/terms-of-use"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.paloaltonetworks.com/legal-notices/privacy"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignInScreen;
