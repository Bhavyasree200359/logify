import React, { useEffect, useState } from "react";
import SummaryCard from "./summaryCard";
import SideBar from "./sideBar";

function AgentConfig() {
  const [configData, setConfigData] = useState([]);
  const [provider, setProvider] = useState("");
  const [model, setModel] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    fetch("/stt.json")
      .then((res) => res.json())
      .then((data) => setConfigData(data.stt));
  }, []);
  const selectedProvider = configData.find((p) => p.value === provider);
  const modelOptions = selectedProvider?.models || [];
  const selectedModel = modelOptions.find((m) => m.value === model);
  const languageOptions = selectedModel?.languages || [];

  return (
    <div className="dashboard-page">
      <SideBar />
      <div className="non-nav-bar-div">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>STT Config</h3>
          <select
            style={{
              marginTop: "20px",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none"
            }}
            value={provider}
            onChange={(e) => {
              setProvider(e.target.value);
              setModel("");
              setLanguage("");
            }}
          >
            <option value="">Select Provider</option>
            {configData.map((p) => (
              <option key={p.value} value={p.value}>
                {p.name}
              </option>
            ))}
          </select>
          <select
            style={{
              marginTop: "20px",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none"
            }}
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
              setLanguage("");
            }}
            disabled={!provider}
          >
            <option value="">Select Model</option>
            {modelOptions.map((m) => (
              <option key={m.value} value={m.value}>
                {m.name}
              </option>
            ))}
          </select>

          <select
            style={{
              marginTop: "20px",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none"
            }}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            disabled={!model}
          >
            <option value="">Select Language</option>
            {languageOptions.map((l) => (
              <option key={l.value} value={l.value}>
                {l.name}
              </option>
            ))}
          </select>
          {provider && model && language && (
            <SummaryCard
              provider={{ name: selectedProvider.name, value: selectedProvider.value }}
              model={{ name: selectedModel.name, value: selectedModel.value }}
              language={{
                name: languageOptions.find((l) => l.value === language)?.name,
                value: language,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentConfig;
