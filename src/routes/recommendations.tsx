import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Skeleton,
  Paper,
  Avatar,
} from '@mui/material';
import {
  MusicNote as MusicIcon,
  Article as ArticleIcon,
  EmojiEmotions as MemeIcon,
  PlayArrow as PlayIcon,
  OpenInNew as OpenIcon,
  Psychology as PsychologyIcon,
} from '@mui/icons-material';
import { useAppStore } from '../store/appStore';

export const Route = createFileRoute('/recommendations')({
  component: RecommendationsPage,
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`recommendations-tabpanel-${index}`}
      aria-labelledby={`recommendations-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function RecommendationsPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const { recommendations, mood, user } = useAppStore();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    // Simulate loading when switching tabs
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const musicRecommendations = recommendations.filter(item => item.type === 'music');
  const blogRecommendations = recommendations.filter(item => item.type === 'blog');
  const memeRecommendations = recommendations.filter(item => item.type === 'meme');

  const RecommendationCard = ({ recommendation }: { recommendation: any }) => {
    if (loading) {
      return (
        <Card sx={{ height: '100%' }}>
          <Skeleton variant="rectangular" width="100%" height={160} />
          <CardContent>
            <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
            <Skeleton variant="text" />
            <Skeleton variant="text" width="60%" />
          </CardContent>
        </Card>
      );
    }

    return (
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 4,
          }
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={recommendation.imageUrl}
          alt={recommendation.title}
          sx={{ bgcolor: 'grey.100' }}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {recommendation.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
            {recommendation.description}
          </Typography>
          <Button
            variant="outlined"
            startIcon={recommendation.type === 'music' ? <PlayIcon /> : <OpenIcon />}
            onClick={() => console.log(`Opening: ${recommendation.title}`)}
            sx={{ mt: 'auto' }}
          >
            {recommendation.type === 'music' ? 'Play' : 'View'}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <PsychologyIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Your Personalized Recommendations
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Based on your {mood?.mbti} personality and current mood
        </Typography>
      </Box>

      {/* Mood Summary */}
      <Paper sx={{ p: 3, mb: 4, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {user?.name?.charAt(0) || 'U'}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
              Hello, {user?.name}!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              MBTI: {mood?.mbti} • {mood?.favorites.length || 0} interests • Generated {new Date().toLocaleDateString()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {mood?.favorites.slice(0, 3).map((fav) => (
              <Chip 
                key={fav} 
                label={fav} 
                size="small" 
                sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
              />
            ))}
            {(mood?.favorites.length || 0) > 3 && (
              <Chip 
                label={`+${(mood?.favorites.length || 0) - 3} more`} 
                size="small"
                sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
              />
            )}
          </Box>
        </Box>
      </Paper>

      {/* Recommendation Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={currentTab} 
          onChange={handleTabChange} 
          aria-label="recommendation categories"
          sx={{
            '& .MuiTab-root': {
              minHeight: 48,
              fontWeight: 600,
            }
          }}
        >
          <Tab 
            icon={<MusicIcon />} 
            iconPosition="start"
            label={`Music (${musicRecommendations.length})`} 
          />
          <Tab 
            icon={<ArticleIcon />} 
            iconPosition="start"
            label={`Blogs (${blogRecommendations.length})`} 
          />
          <Tab 
            icon={<MemeIcon />} 
            iconPosition="start"
            label={`Memes (${memeRecommendations.length})`} 
          />
        </Tabs>
      </Box>

      {/* Music Tab */}
      <TabPanel value={currentTab} index={0}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            🎵 Music Recommendations
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Curated playlists and songs that match your {mood?.mbti} personality and current mood
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {musicRecommendations.map((rec) => (
            <Box key={rec.id} sx={{ flex: '1 1 300px', minWidth: 300 }}>
              <RecommendationCard recommendation={rec} />
            </Box>
          ))}
        </Box>
      </TabPanel>

      {/* Blogs Tab */}
      <TabPanel value={currentTab} index={1}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            📚 Blog Recommendations
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Thoughtful articles and insights tailored to your interests and personality type
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {blogRecommendations.map((rec) => (
            <Box key={rec.id} sx={{ flex: '1 1 400px', minWidth: 400 }}>
              <RecommendationCard recommendation={rec} />
            </Box>
          ))}
        </Box>
      </TabPanel>

      {/* Memes Tab */}
      <TabPanel value={currentTab} index={2}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            😄 Meme Recommendations
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Humor that resonates with your personality and current vibe
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {memeRecommendations.map((rec) => (
            <Box key={rec.id} sx={{ flex: '1 1 300px', minWidth: 300 }}>
              <RecommendationCard recommendation={rec} />
            </Box>
          ))}
        </Box>
      </TabPanel>

      {/* Call to Action */}
      <Paper sx={{ p: 4, mt: 6, textAlign: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom>
          Want new recommendations?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Your mood changes throughout the day. Update your preferences anytime for fresh suggestions.
        </Typography>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => window.location.href = '/mood'}
        >
          Update My Mood
        </Button>
        <Button
          variant="outlined"
          onClick={() => console.log('Refreshing recommendations...')}
        >
          Refresh Recommendations
        </Button>
      </Paper>
    </Container>
  );
}
