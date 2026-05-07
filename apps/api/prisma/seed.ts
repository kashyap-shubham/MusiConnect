import { env } from "@/config/env";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = env.DATABASE_URL;

const adapter = new PrismaPg(new pg.Pool({ connectionString }));

const prisma = new PrismaClient({
  adapter,
});

async function seedDatabase() {
  try {
    console.log("Starting database seed...");

    await prisma.$transaction(async (tx) => {
      
      // USERS
      console.log("Seeding users...");

      const user = await tx.user.upsert({
        where: { email: "demo@musicapp.com" },
        update: {},
        create: {
          email: "demo@musicapp.com",
          name: "Demo User",
          image: null,
          googleId: "demo-google-id",
        },
      });

      console.log("User seeded");


      // ARTISTS
      console.log("Seeding artists...");

      const artists = [
        {
          id: "11111111-1111-1111-1111-111111111111",
          name: "The Local Train",
          image: null,
        },
        {
          id: "22222222-2222-2222-2222-222222222222",
          name: "Arijit Singh",
          image: null,
        },
      ];

      for (const artist of artists) {
        await tx.artist.upsert({
          where: { id: artist.id },
          update: {},
          create: artist,
        });
      }

      console.log("Artists seeded");

      // ALBUMS
      console.log("Seeding albums...");

      const albums = [
        {
          id: "33333333-3333-3333-3333-333333333333",
          title: "Aalas Ka Pedh",
          imageKey: null,
          releaseDate: new Date("2015-01-01"),
          artistId: "11111111-1111-1111-1111-111111111111",
        },
        {
          id: "44444444-4444-4444-4444-444444444444",
          title: "Brahmastra",
          imageKey: null,
          releaseDate: new Date("2022-09-09"),
          artistId: "22222222-2222-2222-2222-222222222222",
        },
      ];

      for (const album of albums) {
        await tx.album.upsert({
          where: { id: album.id },
          update: {},
          create: album,
        });
      }

      console.log("Albums seeded");

      // SONGS
      console.log("Seeding songs...");

      // const songs = [
      //   {
      //     id: "55555555-5555-5555-5555-555555555555",
      //     title: "Choo Lo",
      //     duration: 230,
      //     audioKey: "songs/choo-lo.mp3",
      //     imageKey: null,
      //     albumId: "33333333-3333-3333-3333-333333333333",
      //     artistIds: ["11111111-1111-1111-1111-111111111111"],
      //   },
      //   {
      //     id: "66666666-6666-6666-6666-666666666666",
      //     title: "Aaftab",
      //     duration: 210,
      //     audioKey: "songs/aaftab.mp3",
      //     imageKey: null,
      //     albumId: "33333333-3333-3333-3333-333333333333",
      //     artistIds: ["11111111-1111-1111-1111-111111111111"],
      //   },
      //   {
      //     id: "77777777-7777-7777-7777-777777777777",
      //     title: "Kesariya",
      //     duration: 215,
      //     audioKey: "songs/kesariya.mp3",
      //     imageKey: null,
      //     albumId: "44444444-4444-4444-4444-444444444444",
      //     artistIds: ["22222222-2222-2222-2222-222222222222"],
      //   },
      // ];

      const songs = [
        {
          id: "55555555-5555-5555-5555-555555555555",
          title: "Bairan",
          duration: 140,
          audioKey: "audio/bairan.mp3",
          imageKey: "images/bairan.jpg",
          albumId: "33333333-3333-3333-3333-333333333333",
          artistIds: ["11111111-1111-1111-1111-111111111111"],
        },
        {
          id: "66666666-6666-6666-6666-666666666666",
          title: "Phir Se",
          duration: 200,
          audioKey: "audio/phir-se.mp3",
          imageKey: "images/phir-se.jpg",
          albumId: "33333333-3333-3333-3333-333333333333",
          artistIds: ["11111111-1111-1111-1111-111111111111"],
        },
        {
          id: "77777777-7777-7777-7777-777777777777",
          title: "Sitaare",
          duration: 220,
          audioKey: "audio/sitaare.mp3",
          imageKey: "images/sitaare.jpg",
          albumId: "44444444-4444-4444-4444-444444444444",
          artistIds: ["22222222-2222-2222-2222-222222222222"],
        },
        {
          id: "88888888-8888-8888-8888-888888888888",
          title: "Jaiye Sajna",
          duration: 210,
          audioKey: "audio/jaiye_sajna.mp3",
          imageKey: "images/jaiye_sajna.jpg",
          albumId: "44444444-4444-4444-4444-444444444444",
          artistIds: ["22222222-2222-2222-2222-222222222222"],
        },
        {
          id: "99999999-9999-9999-9999-999999999999",
          title: "Vaari",
          duration: 210,
          audioKey: "audio/vaari.mp3",
          imageKey: "images/vaari.jpg",
          albumId: "44444444-4444-4444-4444-444444444444",
          artistIds: ["22222222-2222-2222-2222-222222222222"],
        },
      ];


      for (const song of songs) {
        await tx.song.upsert({
          where: { id: song.id },
          update: {},
          create: {
            id: song.id,
            title: song.title,
            duration: song.duration,
            audioKey: song.audioKey,
            imageKey: song.imageKey,
            albumId: song.albumId,
            artists: {
              create: song.artistIds.map((artistId) => ({
                artist: {
                  connect: { id: artistId },
                },
              })),
            },
          },
        });
      }

      console.log("Songs seeded");

      // PLAYLIST
      console.log("Seeding playlist...");

      const playlist = await tx.playlist.upsert({
        where: { id: "88888888-8888-8888-8888-888888888888" },
        update: {},
        create: {
          id: "88888888-8888-8888-8888-888888888888",
          name: "My Favorites",
          userId: user.id,
        },
      });

      const playlistSongs = [
        "55555555-5555-5555-5555-555555555555",
        "66666666-6666-6666-6666-666666666666",
      ];

      for (const songId of playlistSongs) {
        await tx.playlistSong.upsert({
          where: {
            playlistId_songId: {
              playlistId: playlist.id,
              songId,
            },
          },
          update: {},
          create: {
            playlistId: playlist.id,
            songId,
          },
        });
      }
    });

    console.log("Playlists seeded");

    console.log("Database seeding completed");

  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();