import { createFileRoute } from '@tanstack/react-router';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Paper,
  Divider,
} from '@mui/material';
import {
  Person as PersonIcon,
  Psychology as PsychologyIcon,
  CalendarToday as CalendarIcon,
  History as HistoryIcon,
  Mood as MoodIcon,
} from '@mui/icons-material';
import { useAppStore } from '../store/appStore';

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
});

function ProfilePage() {
  const { user } = useAppStore();

  // Dummy profile data as specified in the guide
  const profileData = {
    name: user?.name || 'Demo User',
    mbti: user?.mbti || 'INTP',
    activeSince: 'Sep 2025',
    avatar: 'https://via.placeholder.com/150x150/7B68EE/ffffff?text=User',
    moodHistory: [
      {
        id: 1,
        date: '2025-09-15',
        mood: 'Contemplative',
        mbti: 'INTP',
        favorites: ['Jazz', 'Philosophy', 'Reading']
      },
      {
        id: 2,
        date: '2025-09-12',
        mood: 'Energetic',
        mbti: 'INTP',
        favorites: ['Rock Music', 'Gaming', 'Coding']
      },
      {
        id: 3,
        date: '2025-09-10',
        mood: 'Peaceful',
        mbti: 'INTP',
        favorites: ['Classical', 'Nature', 'Meditation']
      }
    ],
    stats: {
      totalRecommendations: 127,
      favoriteGenre: 'Lo-fi Music',
      topInterest: 'Technology',
      moodsTracked: 15
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Your Profile
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Track your mood journey and preferences
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Profile Card */}
        <Card sx={{ overflow: 'visible' }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 3 }}>
              <Avatar
                src={profileData.avatar}
                sx={{ 
                  width: 120, 
                  height: 120,
                  border: '4px solid',
                  borderColor: 'primary.main'
                }}
              >
                {profileData.name.charAt(0)}
              </Avatar>
              
              <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flex: 1 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  {profileData.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <Chip
                    icon={<PsychologyIcon />}
                    label={`MBTI: ${profileData.mbti}`}
                    color="primary"
                    variant="filled"
                  />
                  <Chip
                    icon={<CalendarIcon />}
                    label={`Active Since: ${profileData.activeSince}`}
                    color="secondary"
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body1" color="text.secondary">
                  Discovering personalized content through mood-based recommendations since {profileData.activeSince}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Card sx={{ flex: '1 1 200px', minWidth: 200 }}>
            <CardContent sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700 }}>
                {profileData.stats.totalRecommendations}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Recommendations
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: '1 1 200px', minWidth: 200 }}>
            <CardContent sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 700 }}>
                {profileData.stats.moodsTracked}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Moods Tracked
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: '1 1 200px', minWidth: 200 }}>
            <CardContent sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" color="info.main" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>
                {profileData.stats.favoriteGenre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Favorite Genre
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Mood History */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <HistoryIcon sx={{ fontSize: 28, color: 'primary.main', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Recent Mood History
              </Typography>
            </Box>
            
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {profileData.moodHistory.map((entry, index) => (
                <Box key={entry.id}>
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <MoodIcon sx={{ color: 'secondary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                          <Typography variant="h6" component="span">
                            {entry.mood} Mood
                          </Typography>
                          <Chip 
                            label={entry.mbti} 
                            size="small" 
                            variant="outlined"
                            color="primary"
                          />
                        </Box>
                      }
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {new Date(entry.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {entry.favorites.map((fav) => (
                              <Chip 
                                key={fav}
                                label={fav} 
                                size="small"
                                variant="filled"
                                color="secondary"
                                sx={{ fontSize: '0.75rem' }}
                              />
                            ))}
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < profileData.moodHistory.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Insights */}
        <Paper sx={{ p: 3, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            🎯 Your Personality Insights
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.95 }}>
            As an <strong>{profileData.mbti}</strong>, you tend to enjoy introspective content and value intellectual stimulation. 
            Your top interest in <strong>{profileData.stats.topInterest}</strong> suggests you appreciate innovative and analytical material. 
            Keep exploring different moods to discover new content that matches your diverse interests!
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
