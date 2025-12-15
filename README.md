# TravelWithPola - Egypt Travel Agency Website

A beautiful, performant travel agency website built with Astro, Tailwind CSS, and Decap CMS (formerly Netlify CMS).

![TravelWithPola](https://img.shields.io/badge/TravelWithPola-Egypt%20Tours-dba94f)

## 🌟 Features

- **Fast & SEO-Optimized**: Built with Astro for excellent Core Web Vitals
- **Content Management**: Decap CMS for easy content updates
- **Responsive Design**: Beautiful on all devices
- **Netlify Forms**: Built-in form handling for reservations
- **No Database Required**: Static site with Git-based CMS

## 📁 Project Structure

```
/
├── public/
│   ├── admin/          # Decap CMS configuration
│   └── images/         # Static images
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Content collections (packages, cruises, groups)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages
│   └── styles/         # Global CSS
├── astro.config.mjs    # Astro configuration
├── netlify.toml        # Netlify deployment config
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

## 📸 Adding Images

Place your images in `public/images/` with the following structure:

```
public/images/
├── hero-pyramids.jpg       # Homepage hero
├── packages-hero.jpg       # Packages page hero
├── cruises-hero.jpg        # Cruises page hero
├── groups-hero.jpg         # Groups page hero
├── contact-hero.jpg        # Contact page hero
├── about-hero.jpg          # About page hero
├── about-1.jpg - about-4.jpg
├── packages/               # Package images
├── cruises/                # Cruise images
├── groups/                 # Group tour images
└── team/                   # Team member photos
```

**Recommended image sizes:**
- Hero images: 1920x1080px (landscape)
- Card images: 800x600px (4:3 ratio)
- Team photos: 400x400px (square)

## 🔧 Netlify Deployment

### Initial Setup

1. Push this repository to GitHub
2. Connect to Netlify (Import from Git)
3. Build settings are auto-configured via `netlify.toml`

### Enable Netlify Identity (for CMS)

1. Go to **Site Settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration**, set to **Invite only**
4. Go to **Identity** → **Services** → **Git Gateway** and enable it
5. Invite yourself as a user

### Access the CMS

Navigate to `https://your-site.netlify.app/admin/` and log in.

## 📝 Content Management

### Adding a New Package

1. Go to the CMS admin panel
2. Click **Tour Packages** → **New Package**
3. Fill in all fields including:
   - Title, description, duration
   - Price and number of nights
   - Highlights and itinerary
   - Upload images
4. Save and publish

### Editing Site Settings

1. Go to **Site Settings** in the CMS
2. Update contact info, social links, hero content
3. Save changes

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to change the color palette:

```js
colors: {
  sand: { /* Egyptian sand tones */ },
  nile: { /* Nile blue tones */ },
  papyrus: { /* Warm background tones */ },
}
```

### Fonts

The site uses Google Fonts:
- **Playfair Display**: Headlines
- **Lora**: Body text
- **Cormorant Garamond**: Accent text

## 📧 Form Submissions

Reservation and contact forms are handled by Netlify Forms. View submissions in:

**Netlify Dashboard** → **Forms**

You can also set up email notifications for new submissions.

## 🔒 Security

- Forms include honeypot fields for spam protection
- Admin panel is protected by Netlify Identity
- All headers are configured for security best practices

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary to TravelWithPola.

## 🆘 Support

For technical issues, contact the development team.

---

Built with ❤️ for TravelWithPola

