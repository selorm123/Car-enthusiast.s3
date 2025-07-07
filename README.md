# AWS S3 Static Website

This repo contains sample files and instructions for hosting a static website using **Amazon S3**.

---

## Folder Structure

- Static website files (HTML, CSS, JS) & images(src folder)
- `bucket-policy.json` - Sample S3 bucket policy to allow public access

---

## 🚀 Deployment Instructions

### 1. Create an S3 Bucket
- Go to AWS S3 → Create bucket
- Provide a unique name
- Uncheck "Block all public access"
- Upload the files & images

### 2. Enable Static Website Hosting
- Go to bucket → Properties → Enable static website hosting
- Set:
  - Index document: `index.html`
  - Error document: `error.html`(optional)

### 3. Apply Bucket Policy
- Go to Permissions tab → Bucket Policy
- Copy & Paste Policy provided. *Replace YOUR_BUCKET_NAME with the actual name of your bucket*
- Save changes

*A URL will be provided to enable you test & access the site.*
- Eg: http://YOUR_BUCKET_NAME.s3-website-YOUR-REGION.amazonaws.com


