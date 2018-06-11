let domain, protocol;

if (process.env.MODE === 'production') {
  domain = 'fa-backend.herokuapp.com';
  protocol = 'https';
} else {
  domain = 'localhost:3000';
  protocol = 'http';
}

export const CONNECTION = `${protocol}://${domain}`;