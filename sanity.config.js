import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure';
import { myStructure } from "./sanity/structure";
import {schemaTypes} from './sanity/schemas/index'
import {visionTool} from '@sanity/vision';


const config = defineConfig({
projectId: 'z78czv6c',
dataset: 'production',
title: 'Performance Detritus',
apiVersion: '2024-07-10',
basePath: '/admin',
plugins: [structureTool({structure:myStructure}),visionTool()],
schema: {
  types: schemaTypes,
},

})

export default config;