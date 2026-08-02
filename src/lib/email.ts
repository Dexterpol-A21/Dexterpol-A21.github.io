export const SITE_EMAIL = "paulconlob@gmail.com";
export const SITE_PHONE = "+52 55 2118 3664";
export const SITE_PHONE_PLAIN = "+525521183664";

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

export async function copyEmailToClipboard(email = SITE_EMAIL): Promise<boolean> {
  return copyToClipboard(email);
}

export async function copyPhoneToClipboard(phone = SITE_PHONE): Promise<boolean> {
  return copyToClipboard(phone);
}
