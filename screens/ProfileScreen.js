import React from 'react';

import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
  Box,
  Image,
  Text,
  HStack,
  VStack,
  ScrollView,
  Center,
  Icon,
  StarIcon,
  ShareIcon,
  EditIcon,
  Badge,
  BadgeText,
  BadgeIcon,
  CheckCircleIcon,
} from '@gluestack-ui/themed';
function ProfileScreen() {
    return (
        <ScrollView>
            <VStack space="md" p="$4">
                <Center>
                    <Box position="relative">
                        <Avatar size="2xl" borderRadius="$full">
                            <AvatarFallbackText>RT</AvatarFallbackText>
                            <AvatarImage
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                                }}
                            />
                        </Avatar>
                        <Badge
                            position="absolute"
                            bottom={0}
                            right={0}
                            size="md"
                            variant="solid"
                            borderRadius="$full"
                            backgroundColor="$green500"
                        >
                            <BadgeIcon as={CheckCircleIcon} color="$white" />
                        </Badge>
                    </Box>
                    
                    
                    <VStack space="xs" mt="$2" alignItems="center">
                        <Text size="xl" fontWeight="$bold">Lupita</Text>
                        <Text size="sm" color="$coolGray600">Diseñadora Grafica</Text>
                        <Text size="sm" color="$coolGray600">Aguascalientes , Ags</Text>
                    </VStack>

                   
                    <HStack space="2xl" mt="$4" justifyContent="center">
                    <VStack alignItems="center">
                            <HStack alignItems="center" space="xs">
                                <Text size="lg" fontWeight="$bold">10</Text>
                                <Badge size="sm" variant="solid" borderRadius="$full" action="success">
                                    <BadgeText>+9</BadgeText>
                                </Badge>
                            </HStack>
                            <Text size="sm" color="$coolGray600">Following</Text>
                        </VStack>
                        <VStack alignItems="center" mx="$6">
                            <HStack alignItems="center" space="xs">
                                <Text size="lg" fontWeight="$bold">1000</Text>
                                <Badge size="sm" variant="solid" borderRadius="$full" action="info">
                                    <BadgeText>+99</BadgeText>
                                </Badge>
                            </HStack>
                            <Text size="sm" color="$coolGray600">Followers</Text>
                        </VStack>
                        <VStack alignItems="center">
                            <HStack alignItems="center" space="xs">
                                <Text size="lg" fontWeight="$bold">5K</Text>
                            </HStack>
                            <Text size="sm" color="$coolGray600">Likes</Text>
                        </VStack>
                    </HStack>
                </Center>

                
                <Center mt="$4">
                  <HStack space="xl" px="$4">
                    <Box bg="$coolGray100" p="$3" borderRadius="$lg">
                      <Icon as={ShareIcon} size="lg" color="$blue500" />
                    </Box>
                    <Box bg="$coolGray100" p="$3" borderRadius="$lg">
                      <Icon as={EditIcon} size="lg" color="$blue500" />
                    </Box>
                    <Box bg="$coolGray100" p="$3" borderRadius="$lg">
                      <Icon as={StarIcon} size="lg" color="$blue500" />
                    </Box>
                  </HStack>
                </Center>
                <Box width="100%" px="$4">
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'
                        }}
                        alt="nature image"
                        height={150}
                        width="100%"
                        borderRadius="$xl"
                        resizeMode="cover"
                    />
                </Box>

                <HStack justifyContent="space-between" px="$4" mt="$4">
                            
                       

                    <Box flex={1} mx="$2">
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60'
                            }}
                            alt="nature image"
                            size="xl"
                            borderRadius="$xl"
                        />
                    </Box>
                    <Box flex={1} mx="$2">
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=500&auto=format&fit=crop&q=60'
                            }}
                            alt="architecture image"
                            size="xl"
                            borderRadius="$xl"
                        />
                    </Box>
                    <Box flex={1} mx="$2">
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60'
                            }}
                            alt="travel image"
                            size="xl"
                            borderRadius="$xl"
                        />
                    </Box>
                </HStack>
            </VStack>
        </ScrollView>
    );
    
}

export default ProfileScreen;