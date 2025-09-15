import { createFileRoute, useNavigate } from '@tanstack/react-router';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  TextField,
  Paper,
  Avatar,
  Alert,
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Psychology as PsychologyIcon,
  Favorite as FavoriteIcon,
  PhotoCamera as CameraIcon,
} from '@mui/icons-material';
import { useAppStore } from '../store/appStore';

export const Route = createFileRoute('/mood')({
  component: MoodPage,
});

function MoodPage() {
  const navigate = useNavigate();
  const { setMood } = useAppStore();
  
  const [selectedMBTI, setSelectedMBTI] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [newFavorite, setNewFavorite] = useState('');
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);

  const mbtiTypes = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  ];

  const suggestedFavorites = [
    'Pop Music', 'Rock Music', 'Jazz', 'Classical', 'Hip Hop',
    'Reading', 'Cooking', 'Gaming', 'Photography', 'Traveling',
    'Movies', 'Netflix', 'Yoga', 'Fitness', 'Art',
    'Comedy', 'Memes', 'Podcasts', 'Nature', 'Technology'
  ];

  const handleSelfieUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelfiePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addFavorite = () => {
    if (newFavorite.trim() && !favorites.includes(newFavorite.trim())) {
      setFavorites([...favorites, newFavorite.trim()]);
      setNewFavorite('');
    }
  };

  const addSuggestedFavorite = (favorite: string) => {
    if (!favorites.includes(favorite)) {
      setFavorites([...favorites, favorite]);
    }
  };

  const removeFavorite = (favoriteToRemove: string) => {
    setFavorites(favorites.filter(fav => fav !== favoriteToRemove));
  };

  const handleSubmit = () => {
    if (selectedMBTI) {
      const moodData = {
        selfieUrl: selfiePreview || undefined,
        mbti: selectedMBTI,
        favorites,
        timestamp: new Date(),
      };
      
      setMood(moodData);
      navigate({ to: '/recommendations' });
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <PsychologyIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Share Your Mood
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Tell us about yourself to get personalized recommendations
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Selfie Upload and MBTI Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <CameraIcon sx={{ fontSize: 32, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Upload a Selfie (Optional)
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Share your current expression to help us understand your mood better
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  {selfiePreview ? (
                    <Avatar
                      src={selfiePreview}
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        mx: 'auto',
                        border: '3px solid',
                        borderColor: 'primary.main'
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        border: '2px dashed',
                        borderColor: 'grey.300',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'grey.50'
                      }}
                    >
                      <CameraIcon sx={{ fontSize: 32, color: 'grey.400' }} />
                    </Box>
                  )}
                </Box>

                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadIcon />}
                  sx={{ mb: 2 }}
                >
                  Choose Photo
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleSelfieUpload}
                  />
                </Button>
                
                <Alert severity="info" sx={{ mt: 2, textAlign: 'left' }}>
                  Don't worry - this is just for demo purposes. No actual AI processing yet!
                </Alert>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <PsychologyIcon sx={{ fontSize: 32, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Your MBTI Type *
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Select your personality type to help us understand your preferences
                </Typography>

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Select MBTI Type</InputLabel>
                  <Select
                    value={selectedMBTI}
                    label="Select MBTI Type"
                    onChange={(e) => setSelectedMBTI(e.target.value)}
                  >
                    {mbtiTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {selectedMBTI && (
                  <Alert severity="success">
                    Great choice! {selectedMBTI} personalities often enjoy thoughtful content.
                  </Alert>
                )}
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Favorites Section */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <FavoriteIcon sx={{ fontSize: 32, color: 'secondary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Your Favorites & Interests
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Add things you love to get better recommendations
            </Typography>

            {/* Add Custom Favorite */}
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Add your favorite (e.g., Jazz Music, Sci-fi Movies)"
                value={newFavorite}
                onChange={(e) => setNewFavorite(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addFavorite();
                  }
                }}
              />
              <Button
                variant="contained"
                onClick={addFavorite}
                startIcon={<AddIcon />}
                disabled={!newFavorite.trim()}
              >
                Add
              </Button>
            </Box>

            {/* Suggested Favorites */}
            <Typography variant="subtitle2" gutterBottom>
              Quick Add:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {suggestedFavorites.slice(0, 8).map((favorite) => (
                <Chip
                  key={favorite}
                  label={favorite}
                  variant="outlined"
                  size="small"
                  onClick={() => addSuggestedFavorite(favorite)}
                  disabled={favorites.includes(favorite)}
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText'
                    }
                  }}
                />
              ))}
            </Box>

            {/* Selected Favorites */}
            <Typography variant="subtitle2" gutterBottom>
              Your Selections ({favorites.length}):
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: 40 }}>
              {favorites.length === 0 ? (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  No favorites selected yet...
                </Typography>
              ) : (
                favorites.map((favorite) => (
                  <Chip
                    key={favorite}
                    label={favorite}
                    onDelete={() => removeFavorite(favorite)}
                    color="primary"
                    variant="filled"
                    deleteIcon={<DeleteIcon />}
                  />
                ))
              )}
            </Box>
          </CardContent>
        </Card>

        {/* Submit Section */}
        <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper' }}>
          <Typography variant="h6" gutterBottom>
            Ready for your personalized recommendations?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            disabled={!selectedMBTI}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #7B68EE 0%, #98D8C8 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5A4FCF 0%, #7BC4B4 100%)',
              },
            }}
          >
            Get My Recommendations
          </Button>
          {!selectedMBTI && (
            <Typography variant="caption" display="block" color="error" sx={{ mt: 1 }}>
              Please select your MBTI type to continue
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
}
