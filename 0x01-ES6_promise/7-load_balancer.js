export default function loadBalancer(chinaDownload, USDownload) {
  const promiseAny = Promise.race([chinaDownload, USDownload]);
  return promiseAny;
}
