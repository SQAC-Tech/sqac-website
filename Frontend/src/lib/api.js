const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export function getBackendBaseUrl() {
  const explicitUrl = import.meta.env.VITE_API_BACKEND;

  if (explicitUrl && explicitUrl.trim() !== "") {
    return trimTrailingSlash(explicitUrl.trim());
  }

  if (import.meta.env.DEV) {
    return "http://localhost:5000";
  }

  return "";
}

export function buildApiUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getBackendBaseUrl()}${normalizedPath}`;
}
