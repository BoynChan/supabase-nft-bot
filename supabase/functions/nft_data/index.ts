import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// Setup request options:

serve(async (req) => {
  const requestOptions = {
    method: "GET",
  };
  // Replace with your Alchemy API key:
  const apiKey = "demo";
  const baseURL =
    `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTSales`;
  // nakamigos
  const ownerAddr = "0xd774557b647330C91Bf44cfEAB205095f7E6c367";
  const fetchURL = `${baseURL}?contractAddress=${ownerAddr}&order=desc&limit=5`;
  await fetch(fetchURL, requestOptions)
    .then((response) => response.json())
    .then((response) => JSON.stringify(response, null, 2))
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  const { name } = await req.json();
  const data = {
    message: `Hello ${name}!`,
  };
  console.log("Data:", data);
  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  );
});
