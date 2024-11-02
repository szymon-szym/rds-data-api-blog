import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export let options = {
  stages: [
    { duration: '1m', target: 100 }, 
    { duration: '1m', target: 500 }, 
    { duration: '2m', target: 500 }, 
    { duration: '1m', target: 0 },   
  ],
};

export default function () {
  // Randomly generate an ID between 1 and 4 for each request
  const id = randomIntBetween(1, 4);

  // Make a GET request to the endpoint with the random ID
  const res = http.get(`https://dcqnlv17sa.execute-api.us-east-1.amazonaws.com/items/${id}`);

  // Check if the response status is 200
  check(res, { 'status was 200': (r) => r.status === 200 });

  // Optional: sleep for a short period between requests
  sleep(1);
}
