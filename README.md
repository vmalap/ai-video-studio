# 🎬 AI Video Studio

A powerful web application for creating cinematic videos with AI, uploading videos, generating thumbnails, and publishing directly to YouTube.

## ✨ Features

### 🎬 **AI Video Generation**
- Create stunning cinematic videos from text prompts using OpenAI
- Multiple cinematic styles (Cinematic, Documentary, Commercial, Artistic)
- Customizable video duration (30-300 seconds)
- Real-time progress tracking

### 📹 **Video Upload**
- Upload your own videos from local storage
- Drag and drop support
- Support for MP4, MKV, AVI, MOV formats
- Up to 500MB file size

### 🎨 **Cinematic Thumbnail Generation**
- Automatically generate eye-catching thumbnails
- Customizable colors and text
- YouTube-optimized dimensions (1280x720)
- Professional gradient designs

### 📺 **YouTube Publishing**
- Direct video upload to YouTube
- OAuth2 authentication
- Auto-generated metadata (titles, descriptions, tags)
- Privacy settings (public, unlisted, private)
- Category selection

### 🏷️ **AI-Generated Metadata**
- **Smart Titles** - Multiple SEO-optimized suggestions
- **Descriptions** - Engaging content with call-to-action
- **Tags** - Automatically extracted and popular tags
- **SEO Optimization** - Designed for YouTube algorithm

## 🛠️ Tech Stack

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Google APIs** - YouTube integration
- **Sharp** - Image processing
- **Multer** - File upload handling

### Frontend
- **React 18** - UI library
- **Framer Motion** - Smooth animations
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm
- OpenAI API Key
- YouTube OAuth credentials

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vmalap/ai-video-studio.git
   cd ai-video-studio
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your credentials:
   ```
   OPENAI_API_KEY=your_api_key_here
   YOUTUBE_CLIENT_ID=your_client_id
   YOUTUBE_CLIENT_SECRET=your_client_secret
   YOUTUBE_REDIRECT_URI=http://localhost:5000/api/youtube/callback
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the backend**
   ```bash
   npm start
   ```
   Server runs on `http://localhost:5000`

5. **Start the frontend** (in another terminal)
   ```bash
   npm run client
   ```
   App runs on `http://localhost:3000`

## 🚀 Usage

### Create a Video
1. Navigate to "Generate Video"
2. Enter your video prompt
3. Select style and duration
4. Click "Generate Video"
5. Monitor progress from dashboard

### Upload a Video
1. Go to "Upload Video"
2. Drag and drop or click to browse
3. Select your video file
4. Video is automatically processed

### Generate Thumbnail
1. Go to "Thumbnail"
2. Select a video
3. Enter title and customize colors
4. Click "Generate Thumbnail"
5. Download your cinematic thumbnail

### Publish to YouTube
1. Go to "YouTube"
2. Select your video
3. Click "Generate Metadata"
4. Review and customize content
5. Choose visibility settings
6. Click "Publish to YouTube"

## 📁 Project Structure

```
ai-video-studio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── App.js
│   └── package.json
├── routes/                 # API routes
│   ├── videoRoutes.js
│   ├── youtubeRoutes.js
│   ├── thumbnailRoutes.js
│   └── metadataRoutes.js
├── controllers/            # Route handlers
│   ├── videoController.js
│   ├── youtubeController.js
│   ├── thumbnailController.js
│   └── metadataController.js
├── server.js              # Express server
├── package.json
└── .env.example
```

## 🔑 Environment Variables

```env
# OpenAI Configuration
OPENAI_API_KEY=your_api_key
OPENAI_VIDEO_MODEL=gpt-4-vision

# YouTube Configuration
YOUTUBE_CLIENT_ID=your_client_id
YOUTUBE_CLIENT_SECRET=your_client_secret
YOUTUBE_REDIRECT_URI=http://localhost:5000/api/youtube/callback

# Server Configuration
PORT=5000
NODE_ENV=development
MAX_FILE_SIZE=500MB

# File Storage
UPLOADS_DIR=./uploads
GENERATED_DIR=./generated
```

## 📡 API Endpoints

### Video Management
- `POST /api/video/create` - Create AI video from prompt
- `POST /api/video/upload` - Upload local video
- `GET /api/video/status/:videoId` - Get video processing status

### YouTube Integration
- `GET /api/youtube/auth-url` - Get YouTube authentication URL
- `GET /api/youtube/callback` - OAuth callback handler
- `POST /api/youtube/publish` - Publish video to YouTube
- `GET /api/youtube/channel-info` - Get channel information

### Thumbnails
- `POST /api/thumbnail/generate` - Generate cinematic thumbnail

### Metadata
- `POST /api/metadata/generate` - Generate video metadata

## 🎨 UI Features

- **Dark Theme** - Beautiful dark gradient background
- **Responsive Design** - Works on desktop, tablet, mobile
- **Smooth Animations** - Framer Motion transitions
- **Real-time Notifications** - Toast notifications for user actions
- **Drag & Drop** - Easy file upload
- **Color Picker** - Custom thumbnail colors
- **Progress Tracking** - Real-time generation status

## 🚀 Future Enhancements

- [ ] Real OpenAI Video API integration
- [ ] Advanced video editing tools
- [ ] Multi-language support
- [ ] Video analytics dashboard
- [ ] Batch video processing
- [ ] Custom branding templates
- [ ] Social media cross-posting (TikTok, Instagram)
- [ ] AI-powered voice generation
- [ ] Subtitle auto-generation
- [ ] Custom watermarking

## 📝 License

MIT License - Free for personal and commercial use

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 📧 Support

For issues and feature requests, please create an issue on GitHub.

---

**Built with ❤️ - AI Video Studio**

Created by vmalap | 2026
