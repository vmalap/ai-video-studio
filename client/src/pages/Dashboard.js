import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';
import { FiPlay, FiDownload, FiTrash2 } from 'react-icons/fi';

function Dashboard({ videos }) {
  const [stats, setStats] = useState({
    totalVideos: 0,
    completedVideos: 0,
    processingVideos: 0
  });

  useEffect(() => {
    setStats({
      totalVideos: videos.length,
      completedVideos: videos.filter(v => v.status === 'completed').length,
      processingVideos: videos.filter(v => v.status === 'processing').length
    });
  }, [videos]);

  return (
    <div className="dashboard">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="dashboard-header"
      >
        <h1>Welcome to AI Video Studio</h1>
        <p>Create cinematic videos with the power of AI</p>
      </motion.div>

      <div className="stats-grid">
        <StatCard title="Total Videos" value={stats.totalVideos} color="#00d4ff" />
        <StatCard title="Completed" value={stats.completedVideos} color="#00ff88" />
        <StatCard title="Processing" value={stats.processingVideos} color="#ffa500" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="features-section"
      >
        <h2>Features</h2>
        <div className="features-grid">
          <FeatureCard
            icon="🎬"
            title="AI Video Generation"
            description="Create stunning cinematic videos from text prompts using OpenAI"
          />
          <FeatureCard
            icon="📹"
            title="Video Upload"
            description="Upload your own videos and enhance them with our tools"
          />
          <FeatureCard
            icon="🎨"
            title="Thumbnail Generation"
            description="Generate eye-catching cinematic thumbnails automatically"
          />
          <FeatureCard
            icon="📺"
            title="YouTube Publishing"
            description="Publish videos directly to YouTube with auto-generated metadata"
          />
        </div>
      </motion.div>

      {videos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="recent-videos"
        >
          <h2>Recent Videos</h2>
          <div className="video-list">
            {videos.slice(0, 5).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="stat-card"
      style={{ borderLeftColor: color }}
    >
      <h3>{title}</h3>
      <p style={{ color }}>{value}</p>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="feature-card"
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

function VideoCard({ video }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="video-card"
    >
      <div className="video-header">
        <h4>{video.filename || video.prompt || 'Untitled'}</h4>
        <span className={`status-badge status-${video.status}`}>
          {video.status}
        </span>
      </div>
      <div className="video-actions">
        <button className="btn-icon"><FiPlay /></button>
        <button className="btn-icon"><FiDownload /></button>
        <button className="btn-icon"><FiTrash2 /></button>
      </div>
    </motion.div>
  );
}

export default Dashboard;
