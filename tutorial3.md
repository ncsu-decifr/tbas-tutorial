# Tutorial 3: Uploading and creating a custom T-BAS reference tree with alignments and specimen metadata, and option to place unknown sequences and metadata

1. In this tutorial we will be uploading a custom reference tree and all of the files that are needed to perform a placement of unknown sequences on that tree. We will use the *Ramularia* reference tree and files that are available in [TreeBase](https://www.treebase.org/treebase-web/search/studySearch.html). For your convenience we made these files available as links in the tutorial. They can be downloaded by searching for the S16754 study ID in [TreeBase](https://www.treebase.org/treebase-web/search/studySearch.html) and retrieving the original [tree](http://purl.org/phylo/treebase/phylows/tree/TB2:Tr79968?format=nexus) and [alignment](https://www.treebase.org/treebase-web/search/downloadANexusFile.html?id=16754&treeid=79968) files. The specimen metadata was extracted from Table 1 in [Videira et al. 2015](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4510271/). To begin, go to the T-BAS start page (https://tbas.hpc.ncsu.edu/start) and click on the **Upload Tree** button (see arrow).
![](images/tbas-tutorial3/Tutorial3.1.png)

2. You will be required to login. If you are first time user, you will need to register by clicking on the **Registration page** link (see arrow).
![](images/tbas-tutorial3/Tutorial3.2.1.png)
If you already registered but forgot your PIN you can go to the Registration page and **Check to resend lost PIN** (see arrow).
![](images/tbas-tutorial3/Tutorial3.2.2.png)

3. After registering you will be returned to the login page. Enter your email address, PIN and check the box acknowledging your acceptance of our disclaimer and privacy policy. Then click **Submit**.
![](images/tbas-tutorial3/Tutorial3.3.png)

4. After login you will see two options for uploading trees: **Newick tree** or **cifr phyloXML**.  The **Newick** format is for the tree only and selecting this option will expand the window to allow you to upload the sequence alignment and specimen metadata for the reference tree. The **cifr phyloXML** is a new data standard that extends phyloXML to include both sequence alignments and specimen metadata.  The cifr phyloXML makes it convenient to place on trees from previous T-BAS runs because only one file needs to be uploaded. To begin click on **Newick tree** (see arrow).
![](images/tbas-tutorial3/Tutorial3.4.png)

5. This will expand the display to show three upload sections: **Upload reference tree, Upload reference sequence alignment** and **Upload reference metadata**.  Click on the example file links (see arrows) for each section to load the files.
![](images/tbas-tutorial3/Tutorial3.5.png)

6. The example files will now be visible and can be edited.  We will be making some minor edits to the Nexus sequence alignment file. To see more of the alignment file, click and drag down the corner box (see arrow).
![](images/tbas-tutorial3/Tutorial3.6.png)

7. The expanded window will look as shown below.  Search for “locus” in your browser.
![](images/tbas-tutorial3/Tutorial3.7.png)

8. The search will highlight the loci that are defined in the character partition block and preceded by “charset” (see arrow). If we make no changes the loci will be labeled as locus1, locus2, locus3, locus4, locus5 and locus6 in T-BAS. These names make it difficult to track these loci when performing placements and retrieving data. In this example, the actual name of the locus is provided at the end of the charset line. For example, for locus1 the name is RPB2. Note all locus designations in the alignment file (highlighted in yellow and orange) will need to be relabeled – see next step.
![](images/tbas-tutorial3/Tutorial3.8.png)

9. Here are the relabeled loci. T-BAS can now correctly track the loci and the user will know which target locus to select when performing a placement (described below).
![](images/tbas-tutorial3/Tutorial3.9.png)

10. Scroll to the next section where you will be able to view the reference files or perform a phylogeny-based placement using those files.  Whenever uploading a new dataset in T-BAS first view the files to make sure they are imported correctly.  Leave the default as shown below (see arrow) and hit submit.
![](images/tbas-tutorial3/Tutorial3.10.png)

11. After the run is done the results will be summarized in the browser and you will receive an email. You will be able to download a **cifr phyloXML** file with all the reference files to use in future placements. If you would like to make the reference set available to others there is an option to **Add to T-BAS portal**. We will return to these options but first view the tree to make sure all looks correct.
![](images/tbas-tutorial3/Tutorial3.11.png)

12. Below is the tree resized and formatted with the following options selected:     
    **Zoom** 0.5220   
    **Font size** +6  
    **Colorize leaves** by Species  
    Branch **Width** 2  
    **Branch lengths** are drawn to scale  
    
    The legend is displayed in the dashboard window on the right. The displayed colors may be different than what is shown in other runs.
![](images/tbas-tutorial3/Tutorial3.12.png)

13. Download the cifr phyloXML file.
![](images/tbas-tutorial3/Tutorial3.13.png)

14. Select the **cifr phyloXML** option (see arrow), upload the **cifr phyloXML** file downloaded from the previous step, and click submit.
![](images/tbas-tutorial3/Tutorial3.14.png)

15. After the run is complete, click on **View tree**. As you can see below the cifr phyloXML file contains the tree, alignments (six labeled loci) and specimen metadata. If you want to use this reference set in the future, you will just need to upload this cifr phyloXML file. This tree is resized and formatted with the following options selected:   
    **Zoom**=0.5220  
    **Font size** +6  
    **Colorize leaves** by Species  
    Branch **Width** 2  
    **Branch lengths** are drawn to scale  
    
    The legend is displayed in the dashboard window on the right.
![](images/tbas-tutorial3/Tutorial3.15.png)

16. To add this reference set to the T-BAS portal select the **Add to T-BAS portal** link.
![](images/tbas-tutorial3/Tutorial3.16.png)

17. The following form will appear.
![](images/tbas-tutorial3/Tutorial3.17.png)

18. Here is an example of the form filled out. Note this tree is **private** and shared with only two other people (email list); if you want to make it **public** change the selection in the **Access level** (see arrow). Click submit at the bottom of the form.
![](images/tbas-tutorial3/Tutorial3.18.png)

19. Once your tree has been reviewed by T-BAS admin it will be made available for viewing and placement by clicking on **User Trees** on the T-BAS start page. You will receive an email notification of the status of your submitted tree and when it is available for use in T-BAS.
![](images/tbas-tutorial3/Tutorial3.19.1.png)
List of available trees. For example, click on the **_Ramularia_ species complex** tree (see arrow).
![](images/tbas-tutorial3/Tutorial3.19.2.png)

20. After clicking on the bullet for **_Ramularia_ species complex**, the buttons to **View Metadata** or **Place Unknowns** will be visible.
![](images/tbas-tutorial3/Tutorial3.20.png)

21. Return to the upload tree form (from the TBAS page) and select **cifr phyloXML** and upload file.  Then click on **yes** (see arrow) to perform placement.
![](images/tbas-tutorial3/Tutorial3.21.png)

22. Selecting **yes** will provide options for **uploading unknown query sequences** and **Upload unknowns metadata (optional)**. Click on the links (see arrows) to select the example files.
![](images/tbas-tutorial3/Tutorial3.22.1.png)
The examples will appear in the windows as shown below.
![](images/tbas-tutorial3/Tutorial3.22.2.png)

23. Scrolling down on the page will show **BLAST unknowns options, Cluster and filter unknowns options** and **RAxML options**.  These features function exactly as described in tutorial 2.  In this example we will run the placement with the default values and enter the strain **Ramularia_nyssicola_CBS_127665** as the outgroup.  Hit the **Submit** button.
![](images/tbas-tutorial3/Tutorial3.23.png)

24. A new tab will open showing the selected options for the placement (ensure pop-ups are enabled. If not, enable them and then try again). From the pull-down window select **ITS** and then hit **submit**.
![](images/tbas-tutorial3/Tutorial3.24.png)

25. The run will terminate quickly with the following error **"Newick tree submitted is not bifurcating. Must select constraint tree with multifurcating"**.  This sometimes happens with trees that you download from TreeBase because they are 70% majority-rule bootstrap consensus trees and have multifurcations. **EPA with likelihood weights** can only use bifurcating trees so if you have a **multifurcating tree with polytomies** use the backbone constraint placement method described in next step.
![](images/tbas-tutorial3/Tutorial3.25.png)

26. Return to the RAxML options and select **Backbone constraint tree with bootstraps** and **Multifurcating reference tree with polytomies** (see arrows).  Then hit **Submit**.
![](images/tbas-tutorial3/Tutorial3.26.png)

27. Select the ITS partition from the pull-down and click **submit**.
![](images/tbas-tutorial3/Tutorial3.27.png)

28. The run takes about 10 min to complete.
![](images/tbas-tutorial3/Tutorial3.28.png)

29. Here is the summary of the output files after the run is done. If you download the **cifr phyloXML** file (see arrow) it is possible to continue placing more unknowns by using this phyloXML as a starting tree in step 21. Click on **View tree**.
![](images/tbas-tutorial3/Tutorial3.29.png)

30. Here is the tree with the following options selected:  
    **Zoom** 0.6260  
    **Font size** +6  
    **Font size adjust bootstrap** +6  
    **Colorize leaves** by Species  
    Branch **Width** 2  
    **Branch lengths** are drawn to scale  
    **Bootstrap values** box is checked  
    
    The legend is displayed in the dashboard window on the right.  
    
    All of the sequences belong to a single OTU and a single representative sequence (411) from that OTU is displayed in the tree.
![](images/tbas-tutorial3/Tutorial3.30.png)
