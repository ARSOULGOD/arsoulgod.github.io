# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] All content is customized with your information
- [ ] Resume PDF is added (`resume.pdf`)
- [ ] Certificate image is added (`certificate.jpg`)
- [ ] All links are working correctly
- [ ] Website tested on multiple devices
- [ ] Performance optimized (images compressed, etc.)

## 🌐 GitHub Pages (Free)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository"
3. Name it: `yourusername.github.io` (replace with your username)
4. Make it public
5. Click "Create repository"

### Step 2: Upload Files
1. Click "uploading an existing file"
2. Drag and drop all files from `portfolio_web/` folder
3. Add commit message: "Initial portfolio website"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll down to "GitHub Pages" section
3. Select "main" branch as source
4. Click "Save"
5. Your site will be available at: `https://yourusername.github.io`

## ☁️ Netlify (Free)

### Step 1: Sign Up
1. Go to [Netlify](https://netlify.com)
2. Sign up with GitHub account

### Step 2: Deploy
1. Click "New site from Git"
2. Choose GitHub repository
3. Select your portfolio repository
4. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions to configure DNS

## ⚡ Vercel (Free)

### Step 1: Sign Up
1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub account

### Step 2: Deploy
1. Click "New Project"
2. Import your GitHub repository
3. Click "Deploy"

### Step 3: Custom Domain
1. Go to project settings
2. Add custom domain
3. Configure DNS records

## 🖥️ Traditional Web Hosting

### Step 1: Prepare Files
1. Ensure all files are in the root directory
2. Verify `index.html` is the main file
3. Check all file paths are relative

### Step 2: Upload via FTP
1. Use FTP client (FileZilla, WinSCP)
2. Connect to your hosting server
3. Upload all files to `public_html/` or `www/` folder

### Step 3: Configure Server
1. Set `index.html` as default document
2. Enable HTTPS (recommended)
3. Configure redirects if needed

## 🔧 Custom Domain Setup

### DNS Configuration
```
Type: A Record
Name: @
Value: [Your hosting IP address]

Type: CNAME
Name: www
Value: yourdomain.com
```

### SSL Certificate
- Most hosting providers offer free Let's Encrypt SSL
- Enable HTTPS for security and SEO
- Redirect HTTP to HTTPS

## 📱 Testing After Deployment

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Performance Testing
- [ ] Google PageSpeed Insights
- [ ] GTmetrix
- [ ] WebPageTest

### Functionality Testing
- [ ] Theme toggle works
- [ ] Navigation links work
- [ ] Mobile menu functions
- [ ] Certificate modal opens
- [ ] Resume downloads
- [ ] All animations work

## 🚨 Common Issues & Solutions

### 404 Errors
- Check file paths are correct
- Ensure `index.html` is in root directory
- Verify server configuration

### Images Not Loading
- Check image file names match exactly
- Verify image files are uploaded
- Check file permissions

### Theme Not Saving
- Clear browser cache
- Check localStorage is enabled
- Verify JavaScript is loading

### Mobile Issues
- Test responsive breakpoints
- Check viewport meta tag
- Verify CSS media queries

## 📊 Analytics (Optional)

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to `<head>` section
3. Monitor website performance

### Other Options
- Plausible Analytics (privacy-focused)
- Fathom Analytics
- Simple Analytics

## 🔒 Security Considerations

- Enable HTTPS
- Keep dependencies updated
- Use strong passwords for hosting
- Regular backups
- Monitor for security issues

## 📈 Post-Deployment

### SEO Optimization
- Submit sitemap to Google Search Console
- Verify Google Analytics is working
- Check meta tags and descriptions
- Test social media sharing

### Performance Monitoring
- Monitor page load times
- Check Core Web Vitals
- Optimize images and assets
- Monitor uptime

### Content Updates
- Keep projects and skills current
- Update resume regularly
- Add new certifications
- Refresh content periodically

## 🆘 Getting Help

### Documentation
- Check this README.md file
- Review code comments
- Check browser console for errors

### Community Support
- GitHub Issues
- Stack Overflow
- Web development forums

### Professional Help
- Web developers
- Hosting support teams
- Freelance developers

---

**Happy Deploying! 🎉**

Your portfolio website will be live and accessible to potential employers and clients worldwide.
