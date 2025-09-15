import { createFileRoute } from '@tanstack/react-router';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Paper,
  Chip,
} from '@mui/material';
import {
  CloudQueue as CloudIcon,
  Psychology as AIIcon,
  MusicNote as MusicIcon,
  Article as BlogIcon,
  Info as InfoIcon,
  AutoAwesome as SparkleIcon,
} from '@mui/icons-material';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  const technologies = [
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: '#FF9900' }} />,
      name: 'AWS Cloud',
      description: 'Scalable infrastructure and AI services'
    },
    {
      icon: <AIIcon sx={{ fontSize: 40, color: '#7B68EE' }} />,
      name: 'AI & Machine Learning',
      description: 'Intelligent mood detection and content curation'
    },
    {
      icon: <MusicIcon sx={{ fontSize: 40, color: '#1DB954' }} />,
      name: 'Music APIs',
      description: 'Integration with streaming platforms'
    },
    {
      icon: <BlogIcon sx={{ fontSize: 40, color: '#FF5722' }} />,
      name: 'Content Aggregation',
      description: 'Curated blogs and articles from various sources'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <InfoIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          About MoodRecommender
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover how we use AI & Cloud technology to personalize your content experience
        </Typography>
      </Box>

      {/* Main Description */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 4, 
          background: 'linear-gradient(135deg, rgba(123, 104, 238, 0.1) 0%, rgba(152, 216, 200, 0.1) 100%)',
          border: '1px solid',
          borderColor: 'primary.light'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <SparkleIcon sx={{ fontSize: 36, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Our Mission
          </Typography>
        </Box>
        <Typography variant="h6" paragraph sx={{ lineHeight: 1.6 }}>
          This app uses <strong>AI & Cloud technology</strong> to recommend personalized content 
          based on your mood, personality type, and preferences. We believe that the right content 
          at the right time can enhance your emotional well-being and provide meaningful experiences.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          Whether you're feeling contemplative and need some jazz music, energetic and want upbeat content, 
          or just looking for a good laugh with some memes, we've got you covered. Our intelligent system 
          learns from your MBTI personality type, current mood, and favorite interests to deliver 
          recommendations that truly resonate with you.
        </Typography>
      </Paper>

      {/* Technology Stack */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
          Powered By
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              sx={{ 
                flex: '1 1 250px',
                maxWidth: 300,
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  {tech.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {tech.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tech.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* How It Works */}
      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            How It Works
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography variant="h6" color="primary.main" gutterBottom sx={{ fontWeight: 600 }}>
                🎯 1. Mood Detection
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Share a selfie or select your current MBTI state. Our AI analyzes visual cues and personality indicators 
                to understand your emotional state and mindset.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" color="secondary.main" gutterBottom sx={{ fontWeight: 600 }}>
                🧠 2. Preference Analysis
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your MBTI personality type and stated favorites help us understand your long-term preferences 
                and the types of content that generally resonate with you.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" color="info.main" gutterBottom sx={{ fontWeight: 600 }}>
                ✨ 3. Intelligent Curation
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our AI combines your current mood with your personality profile to curate a perfect mix of 
                music, blog articles, and memes that match your unique state of mind.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" color="success.main" gutterBottom sx={{ fontWeight: 600 }}>
                📈 4. Continuous Learning
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The more you use the app, the better our recommendations become. We track your preferences 
                and feedback to continuously improve your personalized experience.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Current Status */}
      <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'warning.light', color: 'warning.contrastText' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          🚧 Development Status
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          This is currently a <strong>demo version</strong> with dummy data and skeleton functionality. 
          The AI processing and cloud integration are in development.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Chip label="React + TypeScript" size="small" />
          <Chip label="Material-UI" size="small" />
          <Chip label="TanStack Router" size="small" />
          <Chip label="Zustand State Management" size="small" />
          <Chip label="AWS (Coming Soon)" size="small" />
        </Box>
      </Paper>
    </Container>
  );
}
