/* eslint-disable @typescript-eslint/no-explicit-any */

export function getOS() {
  // if a browser has no support for navigator.userAgentData.platform use platform as fallback
  const userAgent = (
    (navigator as any).userAgentData.platform ?? navigator.platform
  ).toLowerCase();

  if (userAgent.includes('win')) {
    return 'Windows';
  } else if (userAgent.includes('android')) {
    return 'Android';
  } else if (userAgent.includes('mac')) {
    return 'Mac';
  } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    return 'iOS';
  } else if (userAgent.includes('linux')) {
    return 'Linux';
  }
  return 'Unknown OS';
}

export function convertToOSLabel(label: string) {
  const os = getOS();
  if (os === 'Windows') {
    return label.replace(/Cmd/g, 'Ctrl').replace(/Opt/g, 'Alt');
  } else if (os === 'Mac') {
    return label
      .replace(/Ctrl/g, '⌘')
      .replace(/Opt/g, '⌥')
      .replace(/Alt/g, '⌥')
      .replace(/Shift/g, '⇧')
      .replace(/Cmd/g, '⌘')
      .replace(/\+/g, '');
  } else if (os === 'Linux') {
    return label.replace(/Ctrl/g, 'Ctrl');
  }
  return label;
}
