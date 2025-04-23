import pkg from 'react-dom/server';
const { renderToReadableStream } = pkg;

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  return renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );
} 