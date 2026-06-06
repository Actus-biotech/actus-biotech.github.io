# Actus Biotech — Marketing Website

Public website for **Actus Biotech**, hosted at [actus-biotech.github.io](https://actus-biotech.github.io).

## About Actus Biotech

Actus Biotech builds wearable biosensors that bridge the gap between clinical-grade muscle monitoring and everyday training and rehabilitation. Our hardware combines **surface EMG** and **IMU (accelerometer)** sensors in a compact, wireless form factor. Multiple sensors can be placed on different muscle groups simultaneously, streaming real-time data to the companion mobile app, which guides users through training programs and rehab protocols with live biofeedback.

## Project Structure

```
actus-biotech.github.io/
├── index.html          # Landing page
├── assets/
│   ├── css/            # Stylesheets / design tokens
│   ├── js/             # Scripts
│   └── img/            # Logo, illustrations, photos
└── README.md
```

## Development

This is a static website. No build step is required to view it locally — open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deployment

The site is deployed automatically via GitHub Pages from the `main` branch.

## License

[MIT](LICENSE) © 2026 Actus Biotech
