import { createFileRoute, Link } from '@tanstack/react-router';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Paper,
  Grid,
  Card,
  CardContent,
  alpha
} from '@mui/material';
import { 
  SentimentVerySatisfied  as MoodIcon,
  Recommend as RecommendIcon,
  Person as PersonIcon,
  AutoAwesome as SparkleIcon
} from '@mui/icons-material';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const features = [
    {
      icon: <MoodIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Share Your Mood',
      description: 'Upload a selfie or select your MBTI type to express how you\'re feeling'
    },
    {
      icon: <RecommendIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Get Recommendations',
      description: 'Receive personalized music, blogs, and memes based on your current mood'
    },
    {
      icon: <PersonIcon sx={{ fontSize: 40, color: 'info.main' }} />,
      title: 'Track Your Journey',
      description: 'Keep track of your mood history and discover patterns in your preferences'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          px: 2,
          background: `linear-gradient(135deg, ${alpha('#7B68EE', 0.1)} 0%, ${alpha('#98D8C8', 0.1)} 100%)`,
          borderRadius: 4,
          mb: 6
        }}
      >
        <Box sx={{ mb: 3 }}>
          <SparkleIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        </Box>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #7B68EE 0%, #98D8C8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3
          }}
        >
          Your Mood, Your Music & Content
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary" 
          paragraph 
          sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}
        >
          Discover personalized recommendations that match your current state of mind. 
          From music to blogs to memes - let AI curate content just for you.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/mood"
          sx={{
            px: 4,
            py: 2,
            fontSize: '1.1rem',
            borderRadius: 3,
            background: 'linear-gradient(135deg, #7B68EE 0%, #98D8C8 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5A4FCF 0%, #7BC4B4 100%)',
            },
          }}
        >
          Start Now
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          textAlign="center" 
          gutterBottom 
          sx={{ mb: 4, fontWeight: 600 }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{xs:12,md:4}} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Paper 
        sx={{ 
          p: 4, 
          textAlign: 'center',
          background: `linear-gradient(135deg, ${alpha('#7B68EE', 0.05)} 0%, ${alpha('#98D8C8', 0.05)} 100%)`,
          border: '1px solid',
          borderColor: alpha('#7B68EE', 0.2)
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Ready to discover content that matches your mood?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Join thousands of users who have found their perfect content match through mood-based recommendations.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            component={Link}
            to="/mood"
            sx={{ px: 3 }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/about"
            sx={{ px: 3 }}
          >
            Learn More
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
