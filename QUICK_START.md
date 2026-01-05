# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Navigate to Frontend Folder
```bash
cd Frontend
```

### Step 2: Install Dependencies (First Time Only)
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### ✅ Done! 
Open your browser and visit: **http://localhost:5173**

---

## 🎯 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

---

## 📱 Test Responsive Design

The website is fully responsive. Test it by:
1. Resizing your browser window
2. Using browser DevTools (F12)
3. Testing on mobile devices

---

## 🎨 Quick Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#2c7873',    // Change these values
  secondary: '#05668d',
  accent: '#f0a202',
}
```

### Change Content
- Edit page files in `src/pages/`
- Update component content in `src/components/`

### Change Images
- Replace images in `public/` folder
- Keep the same filenames OR update references in components

---

## ⚡ Hot Reload

The development server supports Hot Module Replacement (HMR):
- Save any file
- See changes instantly in browser
- No page refresh needed!

---

## 🐛 Troubleshooting

### Issue: Port 5173 already in use
**Solution**: Kill the process or use a different port:
```bash
npm run dev -- --port 3000
```

### Issue: Module not found errors
**Solution**: Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Images not showing
**Solution**: Check that images are in `public/` folder and paths start with `/`

---

## 📚 Learn More

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com

---

## 🎉 You're All Set!

Your modern React + Tailwind portfolio website is ready to go!

For detailed information, see:
- `PROJECT_README.md` - Full documentation
- `CONVERSION_SUMMARY.md` - What was converted
