# Tutorial 3A: Uploading and creating a custom T-BAS reference tree with alignments and specimen metadata

1. In this tutorial we will be uploading a custom reference tree and all of the files that are needed to perform a placement of unknown sequences on that tree. We will use the Ramularia reference tree and files that are available in TreeBase. For your convenience we made these files available as links in the tutorial. They can be downloaded by searching for the S16754 study ID in TreeBase and retrieving the original tree and alignment files. The specimen metadata was extracted from Table 1 in Videira et al. 2015.  

    To begin, go to the T-BAS start page (https://tbas.hpc.ncsu.edu/) and click on Register to register for an account. If an account has already been established, go to step 4.
![](images/tbas-tutorial3a/Tutorial3A.1.png)

2. Fill out the fields shown and click Submit.
![](images/tbas-tutorial3a/Tutorial3A.2.png)

3. On the homepage, click Login at the top right.
![](images/tbas-tutorial3a/Tutorial3A.3.1.png)
Fill out the fields and click Submit.
![](images/tbas-tutorial3a/Tutorial3A.3.2.png)
If you already registered but forgot your PIN you can go to the Registration page and Check to resend lost PIN (see arrow).
![](images/tbas-tutorial3a/Tutorial3A.3.3.png)

4. Click on the Upload Tree button.
![](images/tbas-tutorial3a/Tutorial3A.4.png)

5. There are two options for uploading trees: Newick tree or cifr phyloXML.  The Newick format is for the tree only and selecting this option will expand the window to allow you to upload the sequence alignment and specimen metadata for the reference tree. The cifr phyloXML is a new data standard that extends phyloXML to include both sequence alignments and specimen metadata.  The cifr phyloXML makes it convenient to place on trees from previous T-BAS runs because only one file needs to be uploaded. To begin click on Newick tree (see arrow).
![](images/tbas-tutorial3a/Tutorial3A.5.png)

6. This will expand the display to show three upload sections: Upload reference tree, Upload reference sequence alignment and Upload reference metadata.  Click on the example file links (see arrows) for each section to load the files.
![](images/tbas-tutorial3a/Tutorial3A.6.png)

7. The example files will now be visible and can be edited.  If you have no edits you can skip to step 11. We will be making some minor edits to the Nexus sequence alignment file. To see more of the alignment file, click and drag down the corner box (see arrow).
![](images/tbas-tutorial3a/Tutorial3A.7.png)

8. The expanded window will look as shown below.  Search for “locus” in your browser.
![](images/tbas-tutorial3a/Tutorial3A.8.png)

9. The search will highlight the loci that are defined in the character partition block and preceded by “charset” (see arrow). If we make no changes the loci will be labeled as locus1, locus2, locus3, locus4, locus5 and locus6 in T-BAS. These names make it difficult to track these loci when performing placements and retrieving data. In this example, the actual name of the locus is provided at the end of the charset line. For example, for locus1 the name is RPB2. Note all locus designations in the alignment file (highlighted in yellow and orange) will need to be relabeled – see next step.
![](images/tbas-tutorial3a/Tutorial3A.9.png)

10. Here are the relabeled loci. T-BAS can now correctly track the loci and the user will know which target locus to select when performing a placement (see Tutorial 3B). 
![](images/tbas-tutorial3a/Tutorial3A.10.png)

11. Scroll to the next section where you will be able to view the reference files or perform a phylogeny-based placement using those files.  Whenever uploading a new dataset in T-BAS first view the files to make sure they are imported correctly.  Leave the default as shown below (see arrow) and hit submit.
![](images/tbas-tutorial3a/Tutorial3A.11.png)

12. After the run is done the results will be summarized in the browser and you will receive an email. For docker users, instead of an email, there is a “Results” link under the Utilities menu with a history of T-BAS runs. You will be able to download a cifr phyloXML file with all the reference files to use in future placements. If you would like to make the reference set available to others there is an option to Add to T-BAS portal. We will return to these options but first view the tree to make sure all looks correct.
![](images/tbas-tutorial3a/Tutorial3A.12.png)

13. Below is the tree resized and formatted with the following options selected:  
   Zoom 0.5220  
   Font size +6  
   Colorize leaves by Species  
   Branch Width 2  
   The branch lengths are drawn to scale.  

    The legend is displayed in the dashboard window on the right. The displayed colors may be different than what is shown in other runs.
![](images/tbas-tutorial3a/Tutorial3A.13.1.png)
The tree can also be viewed in rectangular mode with the branch lengths drawn to scale as shown below.  Note the taxa names and attributes are shown at the tips of the branches.
![](images/tbas-tutorial3a/Tutorial3A.13.2a.png)

    ![](images/tbas-tutorial3a/Tutorial3A.13.3a.png)
    ![](images/tbas-tutorial3a/Tutorial3A.13.4.png)