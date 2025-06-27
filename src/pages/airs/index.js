import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";
import UseCasesTabs from "../../components/UseCasesTabs";
import AirsCard from "../../components/AirsCard";
import AirsHero from "../../components/AirsHero";

export default function AIRSApiIntercept() {
  return (
    <Layout
      title="Prisma AIRS API Intercept"
      description="The Prisma AIRS API empowers you to secure AI applications and agents with real-time protection against prompt injection, data leaks, and unsafe outputs. Effortlessly integrate advanced AI security into your workflows."
      wrapperClassName="airs-api-intercept-landing"
    >
      <MainContent />
    </Layout>
  );
}

function MainContent() {
  const { colorMode } = useColorMode();
  return (
    <main
      style={{
        background: colorMode === "dark" ? "#181a20" : "#f5f7fa",
        minHeight: "100vh",
        paddingBottom: 60,
      }}
    >
      {/* Hero Section */}
      <AirsHero />

      {/* Use Cases Section */}
      <div
        className={styles.responsiveSection}
        style={{ marginTop: 44, marginBottom: 44 }}
      >
        <section id="use-cases-section" className={styles.gridSection}>
          <div
            style={{
              background: colorMode === "dark" ? "#23272e" : "#fff",
              borderRadius: 20,
              boxShadow:
                colorMode === "dark"
                  ? "0 2px 12px 0 rgba(0,0,0,0.18)"
                  : "0 2px 12px 0 rgba(0,0,0,0.04)",
              padding: "24px 32px 28px 32px",
              marginBottom: 0,
              border:
                colorMode === "dark"
                  ? "1px solid #333a48"
                  : "1px solid #e0e7ef",
              position: "relative",
            }}
          >
            <div style={{ marginBottom: 0 }}>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: 28,
                  marginBottom: 0,
                  color: colorMode === "dark" ? "#fff" : "#171717",
                }}
              >
                Use Cases
              </h2>
              <div
                style={{
                  width: 48,
                  height: 4,
                  borderRadius: 2,
                  background:
                    "linear-gradient(90deg, #ff6133 0%, #ffb300 100%)",
                  margin: "12px 0 8px 0",
                }}
              />
            </div>
            <UseCasesTabs />
          </div>
        </section>
      </div>
      <div className={styles.responsiveSection} style={{ marginTop: 24 }}>
        <section className={styles.gridSection}>
          <AirsCard
            title={
              <span
                style={{
                  color: colorMode === "dark" ? "#fff" : "#7c3aed",
                  fontWeight: 700,
                }}
              >
                Prisma AIRS Scan API Python SDK
              </span>
            }
            colorMode={colorMode}
            style={{
              background: colorMode === "dark" ? "#232237" : "#f7f5ff",
              border:
                colorMode === "dark"
                  ? "1px solid #333a48"
                  : "1px solid #e0e7ef",
              borderRadius: 20,
              boxShadow:
                colorMode === "dark"
                  ? "0 2px 12px 0 rgba(124,58,237,0.10)"
                  : "0 2px 12px 0 rgba(124,58,237,0.04)",
              padding: 32,
              color: colorMode === "dark" ? "#fff" : "#232237",
              fontSize: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ marginBottom: 16 }}>
              Quickly integrate advanced AI runtime security into your Python
              apps with our official SDK. Effortlessly scan prompts and
              responses for threats, unsafe content, and data leaks—directly
              from your code.
            </div>
            <a
              href="/prisma-airs/api/airuntimesecurity/pythonsdk/"
              className={styles.pythonSdkButton}
              target="_self"
            >
              View Python SDK Docs
            </a>
          </AirsCard>
          <AirsCard
            title="API Reference"
            link="/prisma-airs/api/airuntimesecurity/prisma-airs-api/"
            linkLabel="Full API Reference"
            colorMode={colorMode}
          >
            <div>
              Full API documentation with endpoint details, request/response
              formats, authentication, error codes, and code samples.
            </div>
          </AirsCard>
          <AirsCard
            title="Getting Started"
            link="https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview"
            linkLabel="Read the Guide"
            colorMode={colorMode}
          >
            <div>
              Guided setup for developers: activate your profile, configure
              security, generate API keys, and integrate with your app.
            </div>
          </AirsCard>
        </section>
      </div>
    </main>
  );
}
