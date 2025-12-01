# 📁 File Placement Guide

## 📸 Photos

### How many photos?
- **Minimum:** 1 photo
- **Recommended:** 3-10 photos
- **Maximum:** As many as you want!

### Where to place photos:
1. Create a folder: `public/photos/`
2. Name your photos: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Update the `photos` array in `src/components/PhotoGallery.js`

### Example:
```
public/
  └── photos/
      ├── photo1.jpg
      ├── photo2.jpg
      ├── photo3.jpg
      ├── photo4.jpg
      └── photo5.jpg
```

### Supported formats:
- `.jpg` or `.jpeg`
- `.png`
- `.webp`

### How to update:
Open `src/components/PhotoGallery.js` and update the `photos` array:
```javascript
const photos = [
  {
    id: 1,
    image: '/photos/photo1.jpg',  // Your photo path
    caption: 'My cutest sister 💖',
  },
  {
    id: 2,
    image: '/photos/photo2.jpg',  // Your photo path
    caption: 'My sunshine ☀️',
  },
  // Add more photos here...
];
```

---

## 🎵 Audio

### How many audio files?
- **Only 1 audio file needed** for the voice message

### Where to place audio:
1. Create a folder: `public/audio/`
2. Name your file: `birthday-message.mp3`
3. The code will automatically use it!

### Example:
```
public/
  └── audio/
      └── birthday-message.mp3
```

### Supported formats:
- `.mp3` (recommended)
- `.wav`
- `.ogg`
- `.m4a`

### How to record:
1. Use your phone's voice recorder
2. Record your birthday message
3. Convert to MP3 if needed (use online converters)
4. Place in `public/audio/birthday-message.mp3`

---

## 📝 Quick Steps:

1. **For Photos:**
   - Create `public/photos/` folder
   - Add your photos (photo1.jpg, photo2.jpg, etc.)
   - Update `src/components/PhotoGallery.js` with your photo paths

2. **For Audio:**
   - Create `public/audio/` folder
   - Add `birthday-message.mp3`
   - Done! It will work automatically.

---

## 💡 Tips:

- **Photo sizes:** Recommended 800x1200px or similar portrait orientation
- **Audio length:** 30 seconds to 2 minutes works best
- **File names:** Use lowercase, no spaces (use hyphens: `my-photo.jpg`)
- **File sizes:** Keep photos under 2MB each, audio under 5MB for faster loading

